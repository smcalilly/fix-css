from django.shortcuts import render
from django.views.generic import TemplateView


class Home(TemplateView):
    template_name = 'fix_css/index.html'


def page_not_found(request, exception, template_name='fix_css/404.html'):
    return render(request, template_name, status=404)


def server_error(request, template_name='fix_css/500.html'):
    return render(request, template_name, status=500)

class Map(TemplateView):
    title = 'Map'
    template_name = 'fix_css/map.html'
    component = 'js/map.js'

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['props'] = {'user': 'foobar'}  # Set React props here
        return context
