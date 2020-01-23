class C {
  method() {
    console.log(this.#privateAttribute);
    this.#privateMethod();
  }

  #privateAttribute = 'PRIVATE ATTR';

  #privateMethod() {
    console.log('PRIVATE METHOD');
  }
}

const a = new C();
a.method();
