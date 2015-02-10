describe('$R.find', function () {
  var reactClass, component;

  var TestUtils = React.addons.TestUtils;

  function find (selector) {
    component = TestUtils.renderIntoDocument(React.createElement(reactClass));
    return $R(component).find(selector);
  };

  before(function () {
    reactClass = React.createClass({
      displayName: "MyComponent",

      render: function () {
        return (
          React.createElement('div', { id: 'my-component', className: 'my-class some-other-class' },
            React.createElement('p', {}, 'Hello, world!'),
            React.createElement('a', { className: 'button' }, 'Click me!'),
            React.createElement('button', { className: 'button button-default' }, 'Save')
          )
        );
      }
    });
  });

  describe('text description of component', function () {
    before(function () {
      this.$r = find('MyComponent');
    });

    it('finds one component', function () {
      expect(this.$r).to.have.length(1);
    });

    it('component is instance of MyComponent', function () {
      expect(this.$r[0]).to.be.componentOfType(reactClass);
    });
  });
});