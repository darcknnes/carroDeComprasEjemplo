import { CarroComprasAlvaroPage } from './app.po';

describe('carro-compras-alvaro App', function() {
  let page: CarroComprasAlvaroPage;

  beforeEach(() => {
    page = new CarroComprasAlvaroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
