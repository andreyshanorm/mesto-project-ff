import { renderProfile } from "../renderProfile";
import createCards from "../createCards";

export const apiConfig = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
    headers: {
      authorization: 'ae90b01c-4d6f-4fe0-9bc5-50249125af57',
      'Content-Type': 'application/json'
    }
  }

export const changeProfileInfo = (profileName, about, apiConfig) => {
    fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: apiConfig.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: profileName,
        about: about,
      }),
    })
    .then((data) => {
        if(!data.ok){
            return Promise.reject(`Ошибка: ${data.status}`);
        };
    })
    .catch((err)=>{
        console.log(err);
    });
}

export const changeAvatar = (avatarUrl, apiConfig) => {
    fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: apiConfig.headers.authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    })
    .then((data) => {
        if(!data.ok){
            return Promise.reject(`Ошибка: ${data.status}`);
        };
    })
    .catch((err)=>{
        console.log(err);
    });;
}


export const getCards = () => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: {
          authorization: apiConfig.headers.authorization,
          "Content-Type": "application/json"
        },
      })
        .then((res) => {
            if(res.ok){
               return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err)=>{
            console.log(err);
        });
}

export const addCard = (cardName, url, apiConfig) => {
    fetch(`${apiConfig.baseUrl}/cards`, {
        method: "POST",
        headers: {
          authorization: apiConfig.headers.authorization,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cardName,
          link: url
        })
      })
      .then((data) => {
          if(!data.ok){
              return Promise.reject(`Ошибка: ${data.status}`);
          };
      })
      .catch((err)=>{
          console.log(err);
      });;
}


export const deleteCardQuery = (cardId) => {
  fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: {
      authorization: apiConfig.headers.authorization,
      "Content-Type": "application/json",
    }
  })
  .then((data) => {
      if(!data.ok){
          return Promise.reject(`Ошибка: ${data.status}`);
      };
  })
  .catch((err)=>{
      console.log(err);
  });;
}

export const likeCardQuuery = (cardId, isLiked) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: isLiked ? "DELETE" : "PUT",
    headers: {
      authorization: apiConfig.headers.authorization,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .then((cardData) => {
      const likeNumber = cardData.likes.length
      return likeNumber
    })
    .catch((err) => {
      console.log(err);
    });
}

export const getCurrentLikeNumber = () => {
  return fetch(`${apiConfig.baseUrl}/cards`, {
    method: "GET",
    headers: {
      authorization: apiConfig.headers.authorization,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .then((cardData) => {
      const likeNumber = cardData.map((item)=>{
        return item.likes.length
      })
      return likeNumber
    })
    .catch((err) => {
      console.log(err);
    });
}


export const getProfileInfo = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      headers: {
        authorization: apiConfig.headers.authorization,
      },
    })
      .then((res) => {
          if(res.ok){
             return res.json()
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err)=>{
          console.log(err);
      });
  };

  Promise.all([getProfileInfo(), getCards()])
    .then((data) => {
        const profile = {
            _id: data[0]._id,
            name: data[0].name,
            about: data[0].about,
            avatar: data[0].avatar
        }

        const cards = data[1].map((item)=>{
            return {
                _id: item._id,
                name: item.name,
                link: item.link,
                likes: item.likes,
                owner: item.owner
            }
        })
        renderProfile(profile);
        createCards(cards)
    })