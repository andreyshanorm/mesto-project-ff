
const apiConfig = {
    baseUrl: 'https://nomoreparties.co/v1/wff-cohort-6',
    headers: {
      authorization: 'ae90b01c-4d6f-4fe0-9bc5-50249125af57',
      'Content-Type': 'application/json'
    }
  }

function handleResponse(res){
  if(!res.ok){
    return Promise.reject(`Ошибка: ${res.status}`);
  };
  return res.json()
}


export const changeProfileInfo = (profileName, about) => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        name: profileName,
        about: about,
      }),
    })
    .then((res) => {
      return handleResponse(res)
    })
}

export const changeAvatar = (avatarUrl) => {
    return fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: apiConfig.headers,
      body: JSON.stringify({
        avatar: avatarUrl,
      }),
    })
    .then((res) => {
      return handleResponse(res)
    })
}


export const getCards = () => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        headers: apiConfig.headers,
      })
        .then((res) => {
          return handleResponse(res)
        })
}

export const addCard = (cardName, url) => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: "POST",
        headers: apiConfig.headers,
        body: JSON.stringify({
          name: cardName,
          link: url
        })
      })
      .then((res) => {
        return handleResponse(res)
      })
}


export const deleteCardQuery = (cardId) => {
  return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: apiConfig.headers,
  })
    .then((res) => {
      return handleResponse(res)
    })
}

export const likeCardQuuery = (cardId, isLiked) => {
  return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
    method: isLiked ? "DELETE" : "PUT",
    // 
    headers: apiConfig.headers,
  })
    .then((res) => {
      return handleResponse(res)
    })
}

export const getProfileInfo = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: "GET",
      headers: apiConfig.headers,
    })
      .then((res) => {
        return handleResponse(res)
      })
  };

  