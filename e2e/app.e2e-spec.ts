import { AngularHelloPage } from './app.po';

describe('angular-hello App', () => {
  let page: AngularHelloPage;

  beforeEach(() => {
    page = new AngularHelloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
