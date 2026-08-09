import re

def verificar_forca_senha(senha):
    """
    Avalia a força de uma senha com base em critérios de segurança
    e retorna uma classificação e uma lista de recomendações.
    """
    pontuacao = 0
    recomendacoes = []

    if len (senha) >=8:
        pontuacao += 1
    else:
        recomendacoes.append("A senha deve ter pelo menos 8 caracteres.")

    # 2 criterio: letra minuscula
    if re.search(r'[a-z]', senha):
        pontuacao += 1
    else:
        recomendacoes.append("A senha deve conter pelo menos uma letra minúscula.")

    # 3 criterio: letra maiuscula
    if re.search(r'[A-Z]', senha):
        pontuacao += 1
    else:
        recomendacoes.append("A senha deve conter pelo menos uma letra maiúscula.")

    # 4 criterio: numero
    if re.search(r'[0-9]', senha):
        pontuacao += 1
    else:
        recomendacoes.append("A senha deve conter pelo menos um número.")

    # 5 criterio: caractere especial
    if re.search(r'[!@#$%^&*(),.?":{}|<>]', senha):
        pontuacao += 1
    else:
        recomendacoes.append("A senha deve conter pelo menos um caractere especial (ex: !@#$%).")

    # Classificação da senha
    if pontuacao <= 2:
        classificacao = "Fraca"
    elif pontuacao <= 4:
        classificacao = "Média"
    else:
        classificacao = "Forte"

    return classificacao, recomendacoes

def main():
    senha = input("Digite uma senha para verificar sua força: ")
    classificacao, recomendacoes = verificar_forca_senha(senha)

    print(f"\nClassificação da senha: {classificacao}")

    if recomendacoes:
        print("\nRecomendações para melhorar a senha:")
        for recomendacao in recomendacoes:
            print(f"- {recomendacao}")
    else:
        print("A senha atende a todos os critérios de segurança.")

if __name__ == "__main__":
    main()