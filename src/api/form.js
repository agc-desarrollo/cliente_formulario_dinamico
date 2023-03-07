import create from '../helpers/request'

export function getForm( urlAPI, id ) {
  const request = create(urlAPI)
  return request({
    url: '/form/get_form?id='+id,
    method: 'get',
    data: ''
  })
}

export function getSession( urlAPI, data ) {
  const request = create(urlAPI)
  return request({
    url: '/form/get_session',
    method: 'post',
    data: data
  })
}