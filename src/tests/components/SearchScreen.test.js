import { mount } from "enzyme"
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../components/search/SearchScreen"


const mockNavigate = jest.fn(); //Debe estar asi exactamente, si no, no sirve
//* Mocks
//? memory router
jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe('should test SearchScreen', () => {
    
    test('should show the component correctly with default values', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot(); 
        expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar Un heroe');
    });

    test('should show batman and input withn the value of query string', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchScreen />
            </MemoryRouter>
        );

        expect(wrapper).toMatchSnapshot(); 
        expect(wrapper.find('input').prop('value')).toBe('batman');
    });

    test('should show error when thero is not found', () => {
        const queryParams = 'batman123';

        const wrapper = mount(
            <MemoryRouter initialEntries={[`/search?q=${queryParams}`]}>
                <SearchScreen />
            </MemoryRouter>
        );
    
        expect(wrapper.find('.alert-danger')).toBeDefined();
        expect(wrapper.find('.alert-danger').text().trim()).toBe(`No hay Resultados: ${queryParams}`)
    });

    test('should call navigate to the new url', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search']}>
                <SearchScreen />
            </MemoryRouter>
        ); 
        //? Es como si hubieramos escrito en el input batman
        wrapper.find('input').simulate('change', {
            target: {
                name: 'searchText',
                value: 'batman' 
            }
        })

        //? simular el submit del forms

        wrapper.find('form').prop('onSubmit')({
            preventDefault: ()=>{}
        })

        expect(mockNavigate).toHaveBeenCalledWith('?q=batman');
    })
    
    


    
    
})
