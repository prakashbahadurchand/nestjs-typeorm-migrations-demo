# NestJS TypeORM Migrations Demo

This guide covers the most common migration commands for a NestJS project using TypeORM v0.3.x.

---

## 🚀 Generate Migration

```bash
# Generate a migration based on entity changes first build then generate
npm run build && npx typeorm migration:generate ./src/core/database/migrations/InitUsersTable -d ./dist/config/data-source.config.js
```

---

## ▶️ Run Migrations

```bash
# Apply pending migrations to your database first build then run
npm run build && npx typeorm migration:run -d ./dist/config/data-source.config.js
```

---

## ⏪ Revert Last Migration

```bash
# Roll back (undo) the most recent migration
npx typeorm migration:revert -d ./dist/config/data-source.config.js
```

---

## 📋 Show Migration Status

```bash
# List all migrations and their status (pending/applied)
npx typeorm migration:show -d ./dist/config/data-source.config.js
```

---

**Tip:**  
Always run `npm run build` before migration commands, so TypeORM CLI uses the latest compiled files from `dist/`.
