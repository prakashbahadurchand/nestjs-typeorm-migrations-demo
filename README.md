# 🚀 TypeORM Migration Scripts Cheatsheet

_Recommended for NestJS + TypeORM v0.3.x projects_

---

## Migration Commands

| Command               | Description                      | Usage Example                                  |
|-----------------------|----------------------------------|------------------------------------------------|
| `mig:gen`             | Generate new migration           | `npm run mig:gen --name=InitUsersTable`        |
| `mig:run`             | Apply pending migrations         | `npm run mig:run`                              |
| `mig:revert`          | Revert last migration            | `npm run mig:revert`                           |
| `mig:show`            | Show migration status            | `npm run mig:show`                             |

---

## Details

- **mig:gen**  
  Builds your app, generates a migration with the given name, and shows migration status.  
  _Migration name must be passed as:_  

  ```
  --name=YourMigrationName
  ```

- **mig:run**  
  Builds your app, applies all pending migrations, then shows migration status.

- **mig:revert**  
  Reverts the most recent migration and shows updated migration status.

- **mig:show**  
  Lists all migrations and their applied/pending status.

---

## Quick Reference

```bash
npm run mig:gen --name=InitUsersTable       # Generate migration
npm run mig:run                            # Run migrations
npm run mig:revert                         # Revert last migration
npm run mig:show                           # Show migration status
```

> **Tip:** Always ensure you run `npm run build` before migration commands (handled automatically above).
