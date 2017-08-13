import { FireBasePage } from './app.po';

describe('fire-base App', () => {
  let page: FireBasePage;

  beforeEach(() => {
    page = new FireBasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
