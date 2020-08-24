import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('/tmp/db.json');
const db = lowdb(adapter);

db.defaults({ covids: [] }).write();

export function read(id) {
  return db.get('covids')
    .find({ id })
    .value();
}

export function write(data) {
  if (typeof data !== 'object') {
    return false;
  }

  const record = { id: data.country.toLowerCase(), ...data, updated_at: Date.now() };

  db.get('covids')
    .push(record)
    .write();

  return record;
}

export function update(id, data) {
  return db.get('covids')
    .find({ id })
    .assign({ ...data, updated_at: Date.now() })
    .write();
}
