
import { shallow } from '@vue/test-utils'
import App from '@/App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(App)
  })

  describe("computed", () => {
    describe("itemsClasses", () => {
      it("Deve retornar items-group--red quando inicializar componente", () => {
        expect(wrapper.vm.itemsClasses).toBe("items-group--red")
      })

      it("Deve retornar items-group--red quando items for menor ou igual a 4", () => {
        wrapper.vm.items = [
          { id: 1, name: "iPhone 7", price: 4000, active: true },
          { id: 2, name: "iPhone 8", price: 5500, active: false }
        ]

        expect(wrapper.vm.itemsClasses).toBe("items-group--red")
      })

      it("Deve retornar items-group--green quando items for maior que 4", () => {
        wrapper.vm.items = [
          { id: 1, name: "iPhone 7", price: 4000, active: true },
          { id: 2, name: "iPhone 8", price: 5500, active: false },
          { id: 4, name: "iPhone X", price: 6000, active: true },
          { id: 5, name: "iPhone X", price: 6000, active: true },
          { id: 6, name: "iPhone X", price: 6000, active: true },
          { id: 7, name: "iPhone X", price: 6000, active: true }
        ]

        expect(wrapper.vm.itemsClasses).toBe("items-group--green")
      })
    })
  })

  describe("watch", () => {
    describe("cart", () => {
      it('Deve desabilitar item caso encontrado no carrinho', () => {
        let item = { id: 1, name: "iPhone 7", price: 4000, active: true }
        
        wrapper.setData({
          cart: [item]
        })
        
        expect(wrapper.vm.items[0].active).toBe(false)
      })
    })
  })

  describe("methods", () => {
    describe("buy", () => {
      it('Deve adicionar um item no carrinho', () => {
        let carrinoEsperado =  [
          { id: 1, name: "iPhone 7", price: 4000, active: true },
        ]
        
        wrapper.vm.buy(carrinoEsperado[0])
        
        expect(wrapper.vm.cart).toEqual(carrinoEsperado)
      })

      it('Deve adicionar varios items no carrinho', () => {
        let carrinoEsperado =  [
          { id: 1, name: "iPhone 7", price: 4000, active: true },
          { id: 2, name: "iPhone 8", price: 5500, active: false },
          { id: 3, name: "iPhone X", price: 6000, active: true }
        ]

        wrapper.vm.buy(carrinoEsperado[0])
        wrapper.vm.buy(carrinoEsperado[1])
        wrapper.vm.buy(carrinoEsperado[2])
        
        expect(wrapper.vm.cart).toEqual(carrinoEsperado)
      })
    })
  })

})