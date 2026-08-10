import { render, screen } from '@testing-library/react'
import App from './App'

describe('Componente App', () => {
  test('renderiza o título principal da página', () => {
    render(<App />)
    const titulo = screen.getByRole('heading', { level: 1 })
    expect(titulo).toBeInTheDocument()
  })

  test('exibe o nome da empresa CodeFactory Solutions', () => {
    render(<App />)
    expect(screen.getByText('CodeFactory Solutions')).toBeInTheDocument()
  })

  test('exibe a seção de tecnologias utilizadas', () => {
    render(<App />)
    expect(screen.getByText('Tecnologias Utilizadas')).toBeInTheDocument()
    expect(screen.getByText('React + Vite')).toBeInTheDocument()
    expect(screen.getByText('Docker')).toBeInTheDocument()
  })

  test('exibe o botão Saiba mais', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Saiba mais' })).toBeInTheDocument()
  })
})