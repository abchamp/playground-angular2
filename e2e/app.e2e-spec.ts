import { GithubPgNg2Page } from './app.po';

describe('github-pg-ng2 App', function() {
  let page: GithubPgNg2Page;

  beforeEach(() => {
    page = new GithubPgNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
