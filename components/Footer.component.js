function FooterComponent() {
    const content = `<a target="_blank" href="https://github.com/yuswf/fortinayti">This website is open-source on GitHub.</a>`;
    
    return (
        <footer className="p-5 flex justify-center items-center mt-[-27px] mb-5 underline">
            <p dangerouslySetInnerHTML={{__html: content.replace(/href/g, "target='_blank' href")}}></p>
        </footer>
    );
}

export default FooterComponent;
