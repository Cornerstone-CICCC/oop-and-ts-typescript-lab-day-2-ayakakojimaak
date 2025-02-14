// 🔄 Multi-Type Storage System
// 📦 Create a system that can store and manage different types of data.
//
// 1. Implement a class `Storage<T, U>` that can store multiple types of data.
// 2. Implement a method `addItem` that stores a new item of a generic type.
// 3. Implement a method `removeItem` that removes an item by value.
// 4. Implement a method `getItems` that returns all stored items.
// 5. Implement a method `findItem` that searches for an item by a given property value.
// 6. Implement a method `updateItem` that updates an item by its property value.

interface User {
  id: number;
  name: string;
}

type storageProps = User | number;

class MyStorage<T extends storageProps, U> {
  items: T[] = [];

  addItem(item: T): string {
    this.items.push(item);
    if (typeof item === "number") {
      return `${item} added to storage;`;
    } else {
      return `User ${item.name} added.`;
    }
  }

  getItems() {
    return this.items;
  }

  getItemIndex(id: string | number): number {
    return this.items.findIndex((item) => {
      if (typeof item === "number") {
        return item === id;
      } else {
        return item.id === id;
      }
    });
  }

  removeItem(id: number): string {
    const itemIndex = this.getItemIndex(id);

    if (itemIndex !== -1) {
      if (typeof this.items[itemIndex] === "number") {
        this.items.splice(itemIndex, 1);
        return `${id} removed from storage.`;
      } else {
        this.items.splice(itemIndex, 1);
        return `${this.items[itemIndex].name} removed from storage.`;
      }
    }
  }

  findItem(val: string | number, key?: string): T | string {
    const item = this.items.find((item) => {
      if (typeof item === "number") {
        return item === val;
      } else {
        return item[key] === val;
      }
    });
    return item ? item : "Item not found.";
  }

  updateItem(prop: string, id: number, update: T): string {
    const itemIndex = this.getItemIndex(id);

    if (itemIndex !== -1) {
      if (typeof this.items[itemIndex] === "number") {
        this.items[itemIndex] = update;
        return `${id} updated successfully.`;
      } else {
        this.items[itemIndex] = update;
        if (typeof update !== "number") {
          return `${update.name} updated successfully.`;
        }
        return `${id} updated successfully.`;
      }
    }
  }
}

// Test cases
const numberStrStorage = new MyStorage<number, string>();

console.log(numberStrStorage.addItem(10)); // "10 added to storage."
console.log(numberStrStorage.addItem(20)); // "20 added to storage."
console.log(numberStrStorage.getItems()); // [10, 20]
console.log(numberStrStorage.removeItem(10)); // "10 removed from storage."
console.log(numberStrStorage.getItems()); // [20]

const userStorage = new MyStorage<{ id: number; name: string }, string>();

console.log(userStorage.addItem({ id: 1, name: "Alice" })); // "User Alice added."
console.log(userStorage.addItem({ id: 2, name: "Bob" })); // "User Bob added."
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]
console.log(userStorage.findItem("Alice", "name")); // { id: 1, name: "Alice" }
console.log(userStorage.updateItem("id", 1, { id: 1, name: "Alice Updated" })); // "Alice updated successfully."
console.log(userStorage.getItems()); // [{ id: 1, name: "Alice Updated" }, { id: 2, name: "Bob" }]
