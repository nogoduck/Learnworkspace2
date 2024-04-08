/* eslint-disable react/prop-types */
import { DialogContainer } from '../lib/Layout';

const Page = ({ header, children, footer }) => (
  <div className='Page flex-1 flex-col min-w-[320px]'>
    <header>{header}</header>
    <main>{children}</main>
    <footer>{footer}</footer>
    <DialogContainer />
  </div>
);

export default Page;
