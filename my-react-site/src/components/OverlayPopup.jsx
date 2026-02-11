import './OverlayPopup.css' 


function OverlayPopup({open, setOpen, children}){
    return(
        <section className={`overlay overlay-backdrop ${open ? "" : "hidden"}`} onClick={() => setOpen(false)}>
            <div className={`overlay overlay-content ${open ? "" : "hidden"}`} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </section>
    )
}

export default OverlayPopup;