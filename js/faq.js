$(document).ready(function () {
    const $faqs = $(".faq");

    // Set second FAQ active initially
    if ($faqs.length > 1) {
        $faqs.eq(1).addClass("active");
        $faqs.eq(1).find(".answer").css("max-height", $faqs.eq(1).find(".answer")[0].scrollHeight + "px");
        $faqs.eq(1).find(".icon").text("−");
    }

    $faqs.on("click", function () {
        const $this = $(this);
        const $answer = $this.find(".answer");
        const $icon = $this.find(".icon");

        if (!$this.hasClass("active")) {
            $faqs.removeClass("active").find(".answer").css("max-height", "0");
            $faqs.find(".icon").text("+");

            $this.addClass("active");
            $answer.css("max-height", $answer[0].scrollHeight + "px");
            $icon.text("−");
        } else {
            $this.removeClass("active");
            $answer.css("max-height", "0");
            $icon.text("+");
        }
    });
});
