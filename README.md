
# Auth Server MongoDB

O Auth Server MongoDB é uma aplicação NodeJS que realizar o cadastro e autenticação de usuários no MongoDB.


## Documentação da API

#### Cadastrar usuário

```http
  POST https://auth-server-mongodb.onrender.com/api/auth/register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome de usuário |
| `email` | `string` | **Obrigatório**. Email de usuário |
| `passowrd` | `string` | **Obrigatório**. Senha |

#### Autenticar usuário

```http
  POST https://auth-server-mongodb.onrender.com/api/auth/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `email`      | `string` | **Obrigatório**. Email cadastrado |
| `password`      | `string` | **Obrigatório**. Senha cadastrada |


