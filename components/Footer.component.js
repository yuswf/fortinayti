<<<<<<< HEAD
function FooterComponent() {
    return (
        <footer className="p-5 flex justify-center items-center mt-[-27px] mb-5 underline">
            <p><a target="_blank" href="https://github.com/yuswf/fortinayti">This website is open-source on GitHub.</a></p>
        </footer>
    );
}

export default FooterComponent;
=======
function FooterComponent() {
    const content = `<a target="_blank" href="https://github.com/yuswf/fortinayti">This website is open-source on GitHub.</a>`;
    
    return (
        <footer className="p-5 flex justify-center items-center mt-[-27px] mb-5 underline">
            <p dangerouslySetInnerHTML={{__html: content.replace(/href/g, "target='_blank' href")}}></p>
        </footer>
    );
}

export default FooterComponent;
>>>>>>> 9cc3594afc9069ea0364980d37ea31a9936761d2
