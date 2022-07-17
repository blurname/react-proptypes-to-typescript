type HelloProps = {
  message?: string
};
const Hello: React.FC<HelloProps> = ({ message }) => {
  return <div>hello {message}</div>;
};
type HeyProps = {
  message?: string
};
const Hey: React.FC<HeyProps> = ({ name }) => {
  return <div>hey, {name}</div>;
};
type MyComponentState = {
  foo?: number,
  bar?: number
};
export default class MyComponent extends React.Component<{}, MyComponentState> {
  render() {
    return <button onClick={this.onclick.bind(this)} />;
  }
  onclick() {
    this.setState({ foo: 1, bar: 2 });
  }
}
interface IAnotherComponentProps extends React.HTMLAttributes<Element> {
  foo: string;
}
export class AnotherComponent extends React.Component<
  IAnotherComponentProps,
  {}
> {
  render() {
    return <div />;
  }
}
