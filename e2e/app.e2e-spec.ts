import { Ng2hackernewsPage } from './app.po';

describe('ng2hackernews App', function() {
  let page: Ng2hackernewsPage;

  beforeEach(() => {
    page = new Ng2hackernewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
