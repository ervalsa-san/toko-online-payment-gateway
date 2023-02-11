import App from "@/Layouts/App";
import Container from "@/Components/Container";
import {Head} from "@inertiajs/react";

export default function Home() {
    return (
        <div>
            <Head title="Toko Online"/>
            <Container>
                Home
            </Container>
        </div>
    )
}

Home.layout = page => <App children={page}/>
