//import { use } from 'chai';
///<reference types="cypress"/>
describe('template spec', () => {
  it('1. Find all posts', () => {
    cy.request({
      method: 'GET',
      url: '/posts/1',
    }).then(response => {
      expect(response.status).to.eq(200);
      expect(response.headers["content-type"]).to.eq('text/html; charset=UTF-8');
    })
  })

  it('2. Find 10 posts', () => {
    cy.request({
      method: 'GET',
      url: '/posts?_limit=10',
    }).then(response => {
      expect(response.status).to.eq(200);
    })
  })

  it('3. Find postId=55, postId=60', () => {
    cy.request({
      method: 'GET',
      url: '/posts?id=55&id=60',
    }).then(response => {
      expect(response.status).to.eq(200);
    })
  })

  it('4. Creat a post', () => {
    cy.request({
      method: 'POST',
      url: '/664/posts',
    }).then(response => {
      expect(response.status).to.eq(200);
    })
  })

  it('5. Creat a post', () => {
    cy.request({
      method: 'POST',
      url: '664/posts/',
    }).then(response => {
      expect(response.status).to.eq(200);
    })
  })
})