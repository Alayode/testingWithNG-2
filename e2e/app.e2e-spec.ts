import { TestingWithAngular2Page } from './app.po';

describe('testing-with-angular2 App', function() {
  let page: TestingWithAngular2Page;

  beforeEach(() => {
    page = new TestingWithAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
