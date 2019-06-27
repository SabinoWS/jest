
import { shallow } from '@vue/test-utils'
import App from './App'

describe('App', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(App)
  })

  it("Test", () => {
    expect(1).toEqual(1)
  })
})