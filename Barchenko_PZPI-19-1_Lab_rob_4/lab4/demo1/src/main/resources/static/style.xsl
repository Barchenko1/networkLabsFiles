<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:xsr="http://www.w3.org/1999/xhtml"><xsl:template match="/">
  <html>
  <head>
    <link href="style.css" rel="stylesheet" />
    <xsr:script href="script.js" />
  </head>
  <body>
    <h2>Kharkiv cafe menu</h2>
    <table class="leftTable">
      <tr class="menu">
        <th colspan="2">Main Course</th>
      </tr>
      <xsl:for-each select="Catalog/MainCourse">
      <tr>
        <td><xsl:value-of select="name"/></td>
        <td><xsl:value-of select="price"/></td>
      </tr>
      <tr>
        <td><xsl:value-of select="discription"/></td>
      </tr>
      </xsl:for-each>
      <tr class="menu">
        <th colspan="2">Fist Dish</th>
      </tr>
      <xsl:for-each select="Catalog/HotDish">
        <tr>
          <td><xsl:value-of select="name"/></td>
          <td><xsl:value-of select="price"/></td>
        </tr>
        <tr>
          <td><xsl:value-of select="discription"/></td>
        </tr>
      </xsl:for-each>
    </table>
    <table class="rightTable">
      <tr class="menu">
        <th colspan="2">Salads</th>
      </tr>
      <xsl:for-each select="Catalog/Salads">
        <tr>
          <td><xsl:value-of select="name"/></td>
          <td><xsl:value-of select="price"/></td>
        </tr>
        <tr>
          <td><xsl:value-of select="discription"/></td>
        </tr>
      </xsl:for-each>
      <tr class="menu">
        <th colspan="2">Drinks</th>
      </tr>
      <xsl:for-each select="Catalog/Drinks">
        <tr>
          <td><xsl:value-of select="name"/></td>
          <td><xsl:value-of select="price"/></td>
        </tr>
        <tr>
          <td><xsl:value-of select="discription"/></td>
        </tr>
      </xsl:for-each>
      <tr class="menu">
        <th colspan="2">Alcohol</th>
      </tr>
      <xsl:for-each select="Catalog/Alcohol">
        <tr>
          <td><xsl:value-of select="name"/></td>
          <td><xsl:value-of select="price"/></td>
        </tr>
        <tr>
          <td><xsl:value-of select="discription"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>
</xsl:stylesheet>