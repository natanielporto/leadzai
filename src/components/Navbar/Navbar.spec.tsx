import { render, screen } from "@testing-library/react"
import Navbar from "./Navbar"

describe('Navbar Component', () => {
  it('should render the navbar correctly with the correct text', () => {
    const { getByText } = render(<Navbar/>)

    const navbar = getByText('Weather App')

    expect(navbar).toBeInTheDocument()
  })
})