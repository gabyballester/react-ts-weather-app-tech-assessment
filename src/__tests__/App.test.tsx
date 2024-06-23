import { render } from '@testing-library/react';
import { ChakraProvider, ThemeProvider, theme } from '@chakra-ui/react'; // Importar ThemeProvider y theme de Chakra UI
import App from '../App';

jest.mock('../components', () => ({
  Header: () => <div data-testid="header">Mocked Header</div>,
  MainContainer: () => (
    <div data-testid="main-container">Mocked MainContainer</div>
  ),
}));

describe('App component', () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(
      <ThemeProvider theme={theme}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ThemeProvider>,
    );
  });

  test('renders App component with Header and MainContainer', () => {
    const { getByTestId } = component;

    const headerElement = getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const mainContainerElement = getByTestId('main-container');
    expect(mainContainerElement).toBeInTheDocument();
  });

  it('renders Box component with correct styles', () => {
    const { getByTestId } = component;
    const boxElement = getByTestId('app-box');
    expect(boxElement).toHaveStyle(
      'background-image: linear-gradient(to right, rgb(204, 204, 204), rgb(51, 102, 255));',
    );
  });

  test('renders components in the correct order', () => {
    const { getByTestId } = component;

    const headerElement = getByTestId('header');
    const mainContainerElement = getByTestId('main-container');

    expect(headerElement).toBeInTheDocument();
    expect(mainContainerElement).toBeInTheDocument();

    const parentElement = headerElement.parentNode;
    if (parentElement) {
      const children = Array.from(parentElement.childNodes);

      const headerIndex = children.indexOf(headerElement);
      const mainContainerIndex = children.indexOf(mainContainerElement);

      expect(headerIndex).toBeLessThan(mainContainerIndex);
    } else {
      throw new Error('headerElement does not have a parent');
    }
  });
});
