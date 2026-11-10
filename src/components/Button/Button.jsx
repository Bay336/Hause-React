
import clsx from 'clsx';
import './Button.scss';

export default function Button(props) {
  const { className, type = 'button', href, children, ...restProps } = props;
  
  const isLink = href !== undefined;
  const Component = isLink ? 'a' : 'button';

  return (
    <Component 
      className={clsx('button', className)}
      href={href}
      type={isLink ? undefined : type}
      {...restProps}
    >
      {children}
    </Component>
  );
}
