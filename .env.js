import dev from './.env.dev';
import prod from './.env.prod';

const config = {
    dev,
    prod
}
export default config[process.env.name];