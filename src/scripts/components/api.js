
export const apiConfig = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
    headers: {
      authorization: 'ae90b01c-4d6f-4fe0-9bc5-50249125af57',
      'Content-Type': 'application/json'
    }
  }

export const changeProfileInfo = (profileName, about, apiConfig) => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "PATCH",
      headers: apiConfig.headers,
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
        console.error(err);
    });
}

export const changeAvatar = (avatarUrl, apiConfig) => {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    })
    .then((data) => {
        if(!data.ok){
            return Promise.reject(`Ошибка: ${data.status}`);
        };
        return data.json()
    })
    .catch((err)=>{
        console.error(err);
    });;
}


export const getCards = () => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: apiConfig.headers,
      })
        .then((res) => {
            if(res.ok){
               return res.json()
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
        .catch((err)=>{
            console.error(err);
        });
}

export const addCard = (cardName, url, apiConfig) => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: "POST",
        headers: apiConfig.headers,
        body: JSON.stringify({
          name: cardName,
          link: url
        })
      })
      .then((data) => {
          if(!data.ok){
              return Promise.reject(`Ошибка: ${data.status}`);
          };
          return data.json()
      })
      .catch((err)=>{
          console.error(err);
      });;
}


export const deleteCardQuery = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  })
    .then((data) => {
      if (!data.ok) {
        return Promise.reject(`Ошибка: ${data.status}`);
      }
      return data.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

export const likeCardQuuery = (cardId, isLiked) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: isLiked ? "DELETE" : "PUT",
    // 
    headers: apiConfig.headers,
  })
    .then((res) => {
      if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error(err);
    });
}

export const getProfileInfo = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "GET",
      headers: apiConfig.headers,
    })
      .then((res) => {
          if(res.ok){
             return res.json()
          }
          return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err)=>{
          console.error(err);
      });
  };

  