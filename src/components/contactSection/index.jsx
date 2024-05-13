function ContactSection() {
    return <>
        <div class="card">
          <div class="card-block">
            <h2>Contact</h2>
            <form action="" class="reveal-content">
              <div class="form-group">
                <input type="email" class="form-control" id="email" placeholder="Email"/>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="subject" placeholder="Subject"/>
              </div>
              <div class="form-group">
                <textarea class="form-control" rows="5" placeholder="Enter your message"></textarea>
              </div>
              <div class="form-group">
                <button type="submit" class=" btn btn-primary">Send message</button>
              </div> 
            </form>
          </div>
        </div>
    </>
}

export default ContactSection