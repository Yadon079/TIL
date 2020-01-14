# 객체지향의 기본 이론

[코드스피츠 86기 1회차](https://www.youtube.com/watch?v=E9NZ0YEZrYU&t=3914s)를 보고 정리한 내용입니다.

## Value vs Identifier

- Value Context
  - 함수지향
  - 메모리와 상관없이 값 자체를 본다.
- Identifier Context
  - 객체지향
  - 값이 아닌 메모리 주소를 본다.

```js
const a = { a: 3, b: 5 }
const b = { a: 3, b: 5 }

// Identifier Context
console.log(a === b); // false.

// Value Context
console.log(JSON.stringify(a) === JSON.stringify(b)); // true
```

객체지향은 항상 Identifier를 인자로 받아야 한다. 즉, 숫자를 받으면 안 된다.

객체지향에서 값을 받는 것은 오직 `생성자` 밖에 없다.

### Value의 특징

- 끝 없는 복사본
- 상태 변화에 안전(강제적으로)
  - 상태가 변할 수 없다
  - `3 + 1 = 4` : 3과 1은 그대로 있고 4가 만들어진다.
- 연산을 기반으로 로직을 전개한다.
  - 복잡한 도메인을 포현하는 연산은 굉장히 어렵다
  - 영화표를 계산하는 방법 : 조조 + 할인카드 + 청소년 + 통신사 할인 = ?
  - 연산을 구현할 수 있다는 자신감이 있어야 한다.

### Identifier의 특징

- 하나의 원본
- 상태 변화를 내부에서 책임짐
  - 평소엔 정상이네 술먹었더니 꽐라가된다(?)
  - 정상이든 꽐라든 할일은 하도록 만들어야 한다.
- 메세지를 기반으로 로직을 전개 --> 로직을 위임할 수 있다

::: tip
객체지향은 값을 사용하면 안 된다.
:::

## Polymorphism

Polymorphism(다형성) = 대체가능성 + 내적일관성

- 확장된 객체는 원본으로 대체 가능하다
- 생성 시점의 타입이 내부에 일관성 있게 참조된다.

위에 대한 예는 다음과 같다.

``` js
const Worker = class {
  run() { console.log('working') }
  print() { this.run() }
}

// Overriding
const HardWorker = class extends Worker {
  run() { console.log('HardWorking') }
}

const worker = new HardWorker()
```

이 코드에 대한 객체지향의 개념은 다음과 같다.

::: tip 대체가능성(substitution)
확장된 class는 대상 class를 대체할 수 있다(자식은 부모를 대체할 수 있다)
```js
console.log(worker instanceof Worker) // true. 대체가능성
```
:::

::: tip 내적일관성(internal identity)
어떠한 경우에도 태어났을 때의 원본 클래스를 유지한다.
```js
worker.print() // HardWorker의 print. 내적일관성
```
:::

::: tip Polymorphism of Prototype
javascript는 prototype을 이용해서 대체가능성과 내적일관성을 유지한다.
``` js
console.log(worker.__proto__ === HardWorker.prototype); // true
console.log(HardWorker.prototype.__proto__ === Worker.prototype); // true
console.log(Worker.prototype.__proto__ === Object.prototype); // true

console.log(worker.__proto__ === HardWorker.prototype); // true
console.log(worker.__proto__.__proto__ === Worker.prototype); // true
console.log(worker.__proto__.__proto__.__proto__ === Object.prototype); // true
```
:::

각 언어마다 굉장히 다른 시스템을 사용하지만, 객체지향이라고 불리기 위해선 어떤 형태로든 **대체가능성**과 **내적가능성**을 유지할 수 있어야한다.

**즉, 객체지향언어는 Polymorphism이 언어차원에서 지원한다.**

## Object essentials(객체의 본질)

Java 혹은 Javascript는 객체지향언어의 조건을 만족하고 있다. 하지만, 객체지향언어를 사용한다고 해서 객체지향 프로그래밍을 하는 것은 아니다.

객체가 정상작동하고 객체지향답게 움직여야 하는 본질적인 조건이 필요하다.

``` js
const EssentialObject = class {
  // hide state: 내부의 상태를 감춘다 = 데이터 은닉
  #name = ''
  #screen = null

  constructor(name) { this.#name = name }
  camouflage(name) { this.#screen = (Math.random() * 10).toString(16).replace('.', '') }

  // 캡슐화(encapsulation). 안에서 무슨 일이 일어나는지 노출하면 안 된다.
  get name(){ return this.#screen || this.#name }
}
```

### 데이터 은닉(hide state)

`Maintenance of state` 

- **내부의 상태를 감춘다**(=identifier context를 사용한다.)
- 자신의 상태에 대한 관리의 책임이 있어야 한다(내 지갑은 내가 관리한다)
- 객체의 속성을 밖으로 보여주는 것은 value context를 사용하는 것이다. value context은 객체지향에서 버그를 만들고 결국 value context를 사용하는 객체지향은 언젠간 무너지게 된다.
  
### 캡슐화(encapsulation)

`Encapsulation of functionality`

- **내부에서 무슨 일이 일어나는지 노출하면 안 된다**(객체의 메소드에서 일어나는 일은 외부에서 알면 안 된다)
- 즉, 외부에서 내부의 일을 모르게 한다.
- ATM은 내부적으로 굉장히 복잡하게 작동하지만, 사용자는 그러한 일들에 대해 알 필요도 없고 알아서도 안 된다.
- 예를 들어 `setAge` 라는 method는 캡슐화에 위배될 수 있다. `setChild` `setAdult` 같은 method로 캡슐화할 수 있다.
- 캡슐화를 하기 위해선 **method의 역할 그리고 책임**에 대해 한 단계 더 생각해야 한다.

### Isloation of change

소프트웨어는 무조건 변한다. 우리는 프로그램의 변화를 막을 수 없으며 개발도중에 스펙이 바뀌는 것은 PM의 잘못이 아니라 매우 당연한 일이다.

::: tip 객체지향의 목표
객체지향의 목표는 `격리의 벽`을 세워 변화의 여파가 다른 코드로 전이되지 않도록 하는 것이다. 그리고 _변화의 여파를 막고 격리의 벽을 세울 수 있는 유일한 수단이 바로 앞서 설명한 캡슐화와 데이터 은닉이다._
:::  

즉, 데이터은닉과 캡슐화가 무너지면 서서히 오염되고 결국 객체지향은 무너지게 된다.

## SOLID 원칙

> 컴퓨터 프로그래밍에서 SOLID란 로버트 마틴[1][2]이 2000년대 초반[3]에 명명한 객체 지향 프로그래밍 및 설계의 다섯 가지 기본 원칙을 마이클 페더스가 두문자어 기억술로 소개한 것이다. 프로그래머가 시간이 지나도 유지 보수와 확장이 쉬운 시스템을 만들고자 할 때 이 원칙들을 함께 적용할 수 있다.[3] SOLID 원칙들은 소프트웨어 작업에서 프로그래머가 소스 코드가 읽기 쉽고 확장하기 쉽게 될 때까지 소프트웨어 소스 코드를 리팩터링하여 코드 냄새를 제거하기 위해 적용할 수 있는 지침이다. 이 원칙들은 애자일 소프트웨어 개발과 적응적 소프트웨어 개발의 전반적 전략의 일부다.[3] 