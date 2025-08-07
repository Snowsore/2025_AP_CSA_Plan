# AP Computer Science A Lesson 2 Notes

1. **对象（Objects）概述**

   - 介绍对象作为类的实例，代表具有属性（数据）和行为（方法）的实体。
   - 强调对象通过 `new` 关键字创建，说明其在面向对象编程中的核心作用。

2. **类（Classes）的定义与作用**

   - 讲解类作为对象的蓝图，定义属性（字段）和行为（方法）。
   - 介绍类的基本结构：字段声明、方法定义和构造方法。
   - 强调类在组织代码和实现功能上的重要性。

3. **访问修饰符：Public 和 Private**

   - 介绍 `public` 修饰符，允许字段或方法被外部访问。
   - 讲解 `private` 修饰符，限制访问仅在类内部，保护数据安全。
   - 说明封装（encapsulation）的概念及其对程序设计的意义。

4. **Static 关键字**

   - 介绍 `static` 关键字，表示字段或方法属于类而非对象实例。
   - 说明静态成员在所有对象间共享，适用于全局计数或工具方法。
   - 举例：静态变量跟踪对象数量，静态方法无需对象调用。

5. **方法（Methods）**

   - 讲解方法作为类的行为，执行特定任务的代码块。
   - 介绍方法的组成：访问修饰符、返回类型、方法名、参数。
   - 说明方法重载（method overloading），即同名方法不同参数。

6. **This 关键字**

   - 介绍 `this` 关键字，用于指代当前对象。
   - 说明其用途：区分实例变量与参数或局部变量，调用当前类的构造方法。
   - 强调 `this` 在构造方法和 setter 方法中的常见用法。

7. **作用域（Scope）**

   - 介绍变量的作用域：类作用域（字段）、方法作用域（局部变量）、块作用域（循环或条件块内）。
   - 强调作用域对变量访问的限制，防止意外修改。
   - 举例说明不同作用域变量的生命周期和可见性。

8. **引用类型（References）**

   - 讲解引用类型存储对象的内存地址，而非实际数据。
   - 介绍 `null` 引用，表示不指向任何对象。
   - 说明引用类型在方法参数传递中的行为（传递引用而非副本）。

9. **实战环节：综合应用**

   - 演示一个简单的类定义，包含字段、构造方法、方法和静态变量。
   - 展示如何创建对象、调用方法并访问字段（通过 getter 方法）。
   - 编写一个交互程序，例如管理学生信息的简单类。

10. **课堂总结与互动**
    - 回顾对象、类、访问修饰符、方法和作用域等核心概念。
    - 回答学生问题，澄清 `this` 和 `static` 的使用场景。
    - 布置练习：编写一个包含私有字段、构造方法和方法的类（如 `Book` 或 `Car`），并创建对象测试功能。

### Comparison: How Objects Make Java Great

1. **Organization and Structure**

   - **OOP (Previous Example)**: The `Student` class groups related data (name, grade) and behaviors (methods like `printDetails`, `setGrade`) together. Each student is an object, making it intuitive to manage individual entities.
   - **POP (This Example)**: Data is stored in separate arrays (`names`, `grades`), which are not inherently linked. This requires manual tracking of indices (e.g., `names[0]` and `grades[0]` for Alice), increasing the risk of errors.

2. **Encapsulation**

   - **OOP**: Private fields (`name`, `grade`) protect data, accessible only through public methods (getters/setters). This ensures data integrity and controlled access.
   - **POP**: Data in global arrays is fully exposed, with no protection. Any part of the program can modify `names` or `grades`, leading to potential bugs (e.g., overwriting data accidentally).

3. **Reusability and Modularity**

   - **OOP**: The `Student` class can be reused in other programs by creating new objects. Methods like `printDetails` are tied to the object, making code modular and easy to extend.
   - **POP**: Functions like `addStudent` or `printStudentDetails` are standalone and tied to specific arrays. Reusing them in another program requires copying the arrays and functions, which is less flexible.

4. **Scalability**

   - **OOP**: Adding new features (e.g., a student’s ID or email) is straightforward by adding fields and methods to the `Student` class. Objects keep related data together.
   - **POP**: Adding new attributes (e.g., student IDs) requires creating new arrays and modifying all related functions, which becomes cumbersome as the program grows.

5. **Maintainability**

   - **OOP**: The `this` keyword and object references make it clear which student’s data is being manipulated. Code is self-contained within the class, reducing confusion.
   - **POP**: Managing indices manually (e.g., `index` in `printStudentDetails(index)`) is error-prone, especially with large datasets. There’s no clear link between a student’s name and grade.

6. **Real-World Modeling**
   - **OOP**: Objects naturally model real-world entities (e.g., a `Student` object represents a specific student with attributes and behaviors). This makes code intuitive.
   - **POP**: Data and functions are separate, so the code doesn’t reflect real-world relationships as clearly, making it harder to conceptualize.

### Key Concepts in POP Example

- **No Classes/Objects**: Uses global arrays and functions instead of objects.
- **Static**: All methods are `static` since there’s no class instantiation.
- **Scope**: Demonstrates method scope (`minimumGrade`) and block scope (`message`).
- **References**: Uses `null` in the array to show unassigned slots.
- **No `this` or Encapsulation**: No objects, so no need for `this`; data is openly accessible.
