import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <div dangerouslySetInnerHTML={{ __html: `



    <!-- Page Title -->
    <div class="page-title-area title-bg-four">
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-item">
                        <h2>Our Documents</h2>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <span>Our Documents</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Page Title -->
    <section class="event-area four ptb-100">

        <div class="container">
            <div class="section-title">
                <span class="sub-title">Our Legal Documents</span>
                <h2 class="text-dark">Our Legal Documents</h2>
                <p>Access our legal documents including policies, terms, guidelines ensuring transparency, compliance,
                    and user rights protection.</p>
            </div>

            <div class="row">
                <div class="col-lg-4">
                    <div class="our-documents">
                        <img src="/images/documents/1.jpeg" alt="">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="our-documents">
                        <img src="/images/documents/2.jpeg" alt="">
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="our-documents">
                        <img src="/images/documents/1.jpeg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>


      `}} />
      <Footer />
    </>
  );
}
