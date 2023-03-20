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

export function putClientData( urlAPI, data ) {
  const request = create(urlAPI)
  return request({
    url: '/form/form_data',
    method: 'put',
    data: data
  })
}

export function actionSubmit( urlAPI ) {
  const request = create(urlAPI)
  return request({
    url: '/form/action_submit',
    method: 'post',
    data: {}
  })
}