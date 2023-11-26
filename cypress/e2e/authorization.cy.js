//import { use } from 'chai';
///<reference types="cypress"/>
import user from '..//fixtures/user.json';

let accessToken;
let id;
let email;

describe('Authorization not fake', () => {
    it('Registration flow not fake', () => {
        cy.request({
            method: 'POST',
            url: '/signup',
            body: user,
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.user.email).to.eq(user.email);


            console.log("response: " + JSON.stringify(response));
            console.log("response.body: " + JSON.stringify(response.body));
            console.log("response.body.accessToken: " + JSON.stringify(response.body.accessToken));
            console.log("response.body.user.id: " + JSON.stringify(response.body.user.id));
            console.log("response.body.user.email: " + JSON.stringify(response.body.user.email));

            accessToken = response.body.accessToken;
            id = response.body.user.id;
            email = response.body.user.email;

        })
    })
    it('Login flow not fake', () => {
        cy.request({
            method: 'POST',
            url: '/signin',
            body: user,
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.user.email).to.eq(user.email);
            expect(response.body.user.firstname).to.eq(user.firstname);
            expect(response.body.user.lastname).to.eq(user.lastname);

            console.log("response: " + JSON.stringify(response));
            console.log("response.body: " + JSON.stringify(response.body));
            console.log("response.body.accessToken: " + JSON.stringify(response.body.accessToken));
            console.log("response.body.user.id: " + JSON.stringify(response.body.user.id));
            console.log("response.body.user.email: " + JSON.stringify(response.body.user.email));
            console.log("response.body.user.firstname: " + JSON.stringify(response.body.user.firstname));
            console.log("response.body.user.lastname: " + JSON.stringify(response.body.user.lastname));

            accessToken = response.body.accessToken;
            id = response.body.user.id;
            email = response.body.user.email;
            firstname = response.body.user.firstname;
            lastname = response.body.user.lastname;

        })
    })

})