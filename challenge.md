# Aplicação Web para Contratação de Artistas

## Visão Geral do Projeto

Este projeto é uma aplicação web projetada para facilitar a contratação de artistas (bandas e cantores) para eventos particulares. O usuário pode pesquisar artistas, visualizar uma lista de resultados, selecionar um artista e enviar uma solicitação de contratação através de um formulário. As solicitações enviadas podem ser revisadas posteriormente.

---

## Funcionalidades

1. **Pesquisa de Artistas**:
   - Campo de busca para consultar artistas usando uma API externa (Spotify, Deezer, etc.).
   - Caso não seja possível integrar com API, será utilizada uma lista personalizada de artistas.
2. **Listagem de Artistas**: Exibição dos resultados de busca em formato de lista ou grade, permitindo fácil seleção.

3. **Formulário de Contratação**: Formulário para coletar os detalhes da contratação:

   - **Campos Obrigatórios**:
     - Nome do Contratante
     - Artista Selecionado
     - Data do Evento
     - Endereço do Evento
   - **Campo Opcional**:
     - Cachê do Artista

4. **Processamento de Submissão**:

   - As solicitações são armazenadas no `localStorage` ou em um banco de dados (opcional).
   - Após a submissão, uma tela de sucesso é exibida, permitindo que o usuário realize uma nova contratação ou visualize as solicitações enviadas.

5. **Responsividade**: Layout completamente responsivo para dispositivos móveis, tablets e desktops.

6. **Melhoria da Experiência do Usuário**:

   - Exibição de artistas em alta ou relevantes na página inicial, caso nenhuma busca seja realizada.
   - Feedbacks visuais nas interações (validação de inputs, estados de carregamento, etc.).
   - Animações e transições suaves em CSS.

7. **Qualidade do Código**:
   - Componentes reutilizáveis e bem organizados.
   - Código semântico e comentado em inglês.

---

## Stack Tecnológico

### Frontend:

- **Framework**: React com Vite ou Next.js
- **Bibliotecas**:
  - Axios (para requisições API)
  - React Router (para navegação)
  - Styled-Components / TailwindCSS (para estilização)

### Backend:

- **Framework**: Laravel
- **Banco de Dados** (opcional): MySQL/PostgreSQL (ou outro de preferência)
- **API**: Integração com Spotify, Deezer, ou uma lista personalizada de artistas.
