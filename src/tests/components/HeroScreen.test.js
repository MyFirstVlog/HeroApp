import { mount } from "enzyme"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { HeroScreen } from "../../components/hero/HeroScreen";

const mockNavigate = jest.fn();

jest.mock('react-router-dom',()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('testing <HeroScreen />', () => {
    test('should not show hero screen if it is not in the url ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <Routes>
                    <Route path="/hero" element={<HeroScreen />} />
                    <Route path="/" element={<h1>Not Found</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('h1').text().trim()).toBe('Not Found');
    });
    test('should show hero screen if it is in the url ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={<h1>Not Found</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('img').html().includes('spider.jpg')).toBe(true);

    })

    test('should go to the previous page ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                </Routes>
            </MemoryRouter>
        )

        wrapper.find('button').prop('onClick')();

        expect(mockNavigate).toHaveBeenCalledWith(-1);
    });

    test('should not show hero screen if it is not hero associated to the param ', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider453']}>
                <Routes>
                    <Route path="/hero/:heroeId" element={<HeroScreen />} />
                    <Route path="/" element={<h1>Not Found</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('h1').text().trim()).toBe('Not Found');

    })
    
    
})
