from django.shortcuts import redirect, render

from .models import Post
from blog.forms import CommentForm

# Create your views here.

def frontpage(req):
    posts = Post.objects.all()
    return render(req, "blog/frontpage.html", {"posts":posts})


def post_detail(req, slug):
    post = Post.objects.get(slug=slug)

    if req.method == "POST":
        form = CommentForm(req.POST)

        if form.is_valid():
            comment = form.save(commit=False)
            comment.post = post
            comment.save()

            return redirect("post_detail", slug=post.slug)

    else:
        form = CommentForm()

    return render(req, "blog/post_detail.html", {"post": post, "form": form})
