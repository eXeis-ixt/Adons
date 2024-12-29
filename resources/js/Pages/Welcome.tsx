import Button from "@/Components/Button";
import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Button>Hello</Button>
        </>
    );
}
