import {BASE_URL, fetch} from './config'


const loginApi = data => {
  return fetch({
    url: 'login',
    method: 'POST',
    data: data
  })
};

const handleGetCategoryApi = params=>{
  return fetch({
    url: 'category_list',
    method: 'GET',
    params: params
  })
};
const handleGetBookListApi = params=>{
  return fetch({
    url: 'book_list',
    method: 'GET',
    params: params
  })
};
const handleGetStaticsApi = params=>{
  return fetch({
    url: 'book_num_count',
    method: 'GET',
    params: params
  })
};
const handleGetSmallApi = params=>{
  return fetch({
    url: 'small_count',
    method: 'GET',
    params: params
  })
};
const handleGetPriceApi = params=>{
  return fetch({
    url: 'price_count',
    method: 'GET',
    params: params
  })
};
const handleGetPubCountApi = params=>{
  return fetch({
    url: 'pub_count',
    method: 'GET',
    params: params
  })
};

export {
  loginApi,
  handleGetCategoryApi,
  handleGetBookListApi,
  handleGetStaticsApi,
  handleGetSmallApi,
  handleGetPriceApi,
  handleGetPubCountApi
}
