# InfraDevOps — Verificador de Força de Senha

## Descrição do Projeto

Este projeto foi desenvolvido como atividade prática da disciplina de DevOps e
Integração Contínua do Centro Universitário Internacional Uninter. A proposta
simula a atuação de uma equipe de consultoria contratada pela empresa fictícia
CodeFactory Solutions, com o objetivo de demonstrar, na prática, a adoção da
Cultura DevOps em um fluxo de desenvolvimento de software.

## Objetivo

Aplicar conceitos de versionamento com Git/GitHub, containerização com Docker
e Integração Contínua sobre um projeto real: um script em Python que avalia a
força de senhas com base em critérios de segurança, retornando uma
classificação (Fraca, Média ou Forte) e recomendações de melhoria.

## Tecnologias Utilizadas

- Python 3
- Git / GitHub (versionamento e colaboração)
- Docker (containerização)
- GitHub Actions / Jenkins (Integração Contínua)

## Estrutura de Pastas
infraDevOps/
├── src/
│ └── verificador_senha.py
├── README.md
└── .gitignore

## Instruções de Instalação
1. Clone o repositório:
git clone https://github.com/ThiFAC/infraDevOps.git

2. Acesse a pasta do projeto:
cd infraDevOps

3. Certifique-se de ter o Python 3 instalado. Verifique com:
python --version

## Instruções de Execução
Execute o script diretamente com Python:
python src/verificador_senha.py

O terminal solicitará que você digite uma senha, e retornará sua classificação
de força (Fraca, Média ou Forte) junto com recomendações de melhoria, caso
aplicável.

## Licença
Este projeto é distribuído sob a licença MIT.