export default class RepositorySchema {
  static schema = {
    name: 'Favoritos',
    primaryKey: 'id',
    properties: {
      id: {type: 'int', indexed: true},
      hino: {type: 'int', indexed: true},
      titulo: 'string',
      favorito: {type: 'bool', default: false},
    },
  };
}
