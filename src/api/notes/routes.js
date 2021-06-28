const routes = (handler) => [
  {
    method: 'POST',
    path: '/notes',
    handler: handler.postNoteHandler, // Menerima dan menyimpan 1 note
  },
  {
    method: 'GET',
    path: '/notes',
    handler: handler.getNotesHandler, // Mengembalikan banyak notes
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: handler.getNoteByIdHandler, // Mengembalikan 1 notes berdasarikan Id
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: handler.putNoteByIdHandler, // Menerima dan mengubah note berdasarkan Id
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: handler.deleteNoteByIdHandler, // Menghapus note berdasarkan Id
  },

];

module.exports = routes;
