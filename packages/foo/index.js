import Foo from './src'

Foo.install = (app) => {
  app.component(Foo.name, Foo)
}

export default Foo
