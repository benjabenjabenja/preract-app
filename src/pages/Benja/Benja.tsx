import { BENJA_NAME } from '../../utils/Constants';
interface BenjaLayoutProps {
    name?: string;
}

const BenjaLayout = ({ name }: BenjaLayoutProps) => (
        <div>
            <h1>{name ?? BENJA_NAME}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
    </div>
)

export default BenjaLayout;