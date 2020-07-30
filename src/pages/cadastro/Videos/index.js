import React from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroVideos() {
  return (
  <PageDefault>
    <h1>Cadastro de Vídeos</h1>

    <Link to="cadastro/categoria">
      Cadastrar nova categoria
    </Link>
  </PageDefault>
  )
}

export default CadastroVideos;