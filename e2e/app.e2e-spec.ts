import { DoappPage } from './app.po';

describe('doapp App', () => {
  let page: DoappPage;

  beforeEach(() => {
    page = new DoappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
